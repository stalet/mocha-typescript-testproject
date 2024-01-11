import 'mocha';
import {transformStuff} from '../src';
import {expect} from 'chai';

describe('stuff', () => {
    it('transforms stuff', () => {

        // This is the test that fails
        expect(transformStuff({foo: 'foo', bar: '1'})).to.equal('{"foo":"foo","bar":1}');

        // This is the fix
        //expect(transformStuff({foo: 'foo', bar: 1})).to.equal('{"foo":"foo","bar":1}');
    });
});
