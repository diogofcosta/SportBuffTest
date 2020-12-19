import SportBuffClientFactory from "../src/client/SportBuffClientFactory";
import SportBuffClient from "../src/client/SportBuffClient";
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {SportBuffClientConfig} from "../src/client/Config";
import sinon, {SinonSandbox, SinonSpy} from "sinon";
import { expect } from "chai";

describe('SportBuffClientFactory', () => {
    let sandbox: SinonSandbox;
    let axiosCreateSpy: SinonSpy<[AxiosRequestConfig?], AxiosInstance>;

    before(() => {
        sandbox = sinon.createSandbox();
        axiosCreateSpy = sandbox.spy(axios, 'create');
    })

    afterEach(() => {
        axiosCreateSpy.resetHistory();
    });

    after(() => {
        sandbox.restore();
    })

    it('should return an instance of SportBuffClient with default options', () => {
       const instance = SportBuffClientFactory.create();

       expect(instance).to.be.an.instanceOf(SportBuffClient);
       sinon.assert.calledOnceWithExactly(axiosCreateSpy, {
           timeout: 30000 // 30s is the default timeout when no options are passed to the client
       });
    });

    it('should return an instance of SportBuffClient with provided options, keeping the defaults', () => {
        const options: SportBuffClientConfig = {
            url: 'test',
            method: 'patch',
            baseURL: 'https://example.com',
            headers: {
                'x-foo': 'bar',
            },
        };

        const instance = SportBuffClientFactory.create(options);

        expect(instance).to.be.an.instanceOf(SportBuffClient);
        sinon.assert.calledOnceWithExactly(axiosCreateSpy, {
            ...options,
            timeout: 30000 // 30s is the default option that we don't override
        });
    });

    it('should return an instance of SportBuffClient with provided options, overriding the defaults', () => {
        const options: SportBuffClientConfig = {
            url: 'test',
            method: 'patch',
            baseURL: 'https://example.com',
            headers: {
                'x-foo': 'bar',
            },
            timeout: 10000
        };

        const instance = SportBuffClientFactory.create(options);

        expect(instance).to.be.an.instanceOf(SportBuffClient);
        sinon.assert.calledOnceWithExactly(axiosCreateSpy, options);
    });
})