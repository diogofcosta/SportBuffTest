import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import sinon, { SinonSandbox, SinonStubbedInstance } from "sinon";
import SportBuffClient from "../src/client/SportBuffClient";
import ISportBuffClient from "../src/client/ISportBuffClient";
import IBuffService from "../src/service/Buff/IBuffService";
import BuffService from "../src/service/Buff/BuffService";
import Buff from "../src/domain/Buff";
import {BuffAnswer, BuffAuthor} from "../src/domain/types";
import SportBuffClientResponse from "../src/client/Response";

chai.use(chaiAsPromised);

describe('BuffService', () => {
    let sandbox: SinonSandbox;
    let sportBuffClientStub: SinonStubbedInstance<ISportBuffClient>;
    let buffService: IBuffService;

    const buffId = 1;

    const mockBuffAuthor: BuffAuthor = {
        id: 1,
        first_name: 'test',
        last_name: 'name',
        photo: ['https://example.com']
    };

    const mockBuffAnswers: BuffAnswer[] = [
        {
            id: 1,
            buff_id: 1,
            title: 'Answer A',
            bg_color: 'xxxxx',
            fg_color: 'yyyyy',
            image: ['https://example.com']
        },
        {
            id: 2,
            buff_id: 1,
            title: 'Answer B',
            bg_color: 'xxxxx',
            fg_color: 'yyyyy',
            image: ['https://example.com']
        }
    ]

    const mockBuff = new Buff(buffId, 'Test question?', 50, 15, mockBuffAuthor, mockBuffAnswers);

    before(() => {
        sandbox = sinon.createSandbox();

        sportBuffClientStub = sandbox.createStubInstance(SportBuffClient);
        buffService = new BuffService(sportBuffClientStub);
    });

    afterEach(() => {
        sandbox.reset();
    });

    after(() => {
        sandbox.restore();
    });

    it('should return a buff when called with valid id that exists on API', async () => {
        const validEndpoint = `buff/${buffId}`;

        const validApiResponse: SportBuffClientResponse = {
            statusCode: 200,
            body: mockBuff,
            headers: {
                'x-test-header': 'test'
            }
        }

        sportBuffClientStub.get.withArgs(validEndpoint).resolves(validApiResponse);

        const result = await buffService.getBuff(buffId);

        expect(result).to.be.instanceOf(Buff);
        expect(result).to.be.deep.eq(mockBuff);
    });

    it('should return null when called with invalid an id that doesnt exist on API', async () => {
        const invalidBuffId = 4321;
        const invalidIdEndpoint = `buff/${invalidBuffId}`;

        const invalidApiResponse: SportBuffClientResponse = {
            statusCode: 404,
            body: null,
            headers: {
                'x-test-header': 'test'
            }
        }

        sportBuffClientStub.get.withArgs(invalidIdEndpoint).resolves(invalidApiResponse);

        const result = await buffService.getBuff(invalidBuffId);

        expect(result).to.be.null;
    });

    it('should return null when an error occurs while communicating with the API', async () => {
        sportBuffClientStub.get.throws();

        const result = await buffService.getBuff(buffId);

        expect(result).to.be.null;
    });
});