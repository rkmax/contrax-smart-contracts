import { doStrategyTest } from "../strategy-test.test";
import { TestableStrategy, LPTestDefault } from "../strategy-test-case";

const tests = [
    {
        name: "Gmx",
        controller: "gmx", 
        vaultAddress: "0xbD632F10205E96bc859d10355E682822C94fF754",
        slot: 5
    },

];

describe("GMX LP test", function() {
    for (const test of tests) {
        let Test: TestableStrategy = {
            ...LPTestDefault,
            ...test,
        
        };
        doStrategyTest(Test);
    }
});