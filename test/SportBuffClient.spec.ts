import axios, {AxiosInstance} from "axios";
import SportBuffClient from "../src/client/SportBuffClient";
import sinon, { SinonSandbox } from "sinon";
import { expect } from "chai";

describe('SportBuffClient', () => {
    let sandbox: SinonSandbox;

    before(() => {
        sandbox = sinon.createSandbox();
    })

    after(() => {
        sandbox.restore();
    });

    describe('GET Requests', () => {
        let axiosInstance: AxiosInstance;

        beforeEach(() => {
            axiosInstance = axios.create();
        });

        afterEach(() => {
            sandbox.reset();
        });

        it('should make a GET request and return successfull response', async () => {
            const mockData = 'justToTest';

            sandbox
                .stub(axiosInstance, 'request')
                .withArgs({
                    method: 'GET',
                    url: '/success'
                })
                .resolves(createResponse(200, mockData))

            const sportBuffClient = new SportBuffClient(axiosInstance);

            const result = await sportBuffClient.get('/success');

            expect(result).to.eql({
                statusCode: 200,
                body: mockData,
                headers: { 'content-type': 'application/json' },
            });
        })

        it('should make a GET request and return 4xx error response', async () => {
            const mockResponse = { message: 'unauthorized' };

            sandbox
                .stub(axiosInstance, 'request')
                .withArgs({
                    method: 'GET',
                    url: '/unauthorized'
                })
                .resolves(createResponse(401, mockResponse));

            const sportBuffClient = new SportBuffClient(axiosInstance);

            const result = await sportBuffClient.get('/unauthorized');

            expect(result).to.eql({
                statusCode: 401,
                body: { message: 'unauthorized' },
                headers: { 'content-type': 'application/json' },
            });
        })

        it('should make a GET request and throw 5xx error containing the response', async () => {
            const errorMessage = 'potatoes';
            const error = new Error(errorMessage);
            // @ts-ignore
            error.response = createResponse(500, { message: error.message });

            sandbox
                .stub(axiosInstance, 'request')
                .withArgs({
                    method: 'GET',
                    url: '/5xxError'
                })
                .rejects(error);

            const sportBuffClient = new SportBuffClient(axiosInstance);

            try {
                await sportBuffClient.get('/5xxError');
                expect.fail('test should have failed and it didnt');
            } catch (error) {
                expect(error.message).to.eql(errorMessage);
                expect(error.response).to.eql({
                    statusCode: 500,
                    body: { message: errorMessage },
                    headers: { 'content-type': 'application/json' },
                });
            }
        })
    });
})

const createResponse = (statusCode: number, data?: any) => {
    return {
        status: statusCode,
        data,
        headers: {
            'content-type': 'application/json'
        },
    };
}