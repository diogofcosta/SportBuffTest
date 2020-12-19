import BuffService from "../src/service/Buff/BuffService";
import IBuffController from "../src/controller/Buff/IBuffController";
import BuffController from "../src/controller/Buff/BuffController";
import IBuffService from "../src/service/Buff/IBuffService";
import sinon, { SinonSandbox, SinonStubbedInstance } from "sinon";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

describe('BuffController', () => {
    let sandbox: SinonSandbox;
    let buffServiceStub: SinonStubbedInstance<IBuffService>;
    let buffController: IBuffController;

    const buffId = 1;

    before(() => {
        sandbox = sinon.createSandbox();
        buffServiceStub = sandbox.createStubInstance(BuffService);

        buffController = new BuffController(buffServiceStub);
    });

    describe('BuffController', () => {
       it('should return error when no buff is returned from API', async () => {
           buffServiceStub.getBuff.withArgs(buffId).resolves(undefined);

           const promise = buffController.getBuff(buffId);

           sinon.assert.calledOnceWithExactly(buffServiceStub.getBuff, buffId);
           const err = await expect(promise).to.eventually.be.rejected;
           expect(err.message).to.equal('potatoes');
       });
    });
});