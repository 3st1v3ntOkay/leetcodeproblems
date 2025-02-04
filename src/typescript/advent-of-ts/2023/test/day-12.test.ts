import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

import type { FindSanta } from "../day-12";

// test 1
type Forest0 = ["🎅🏼", "🎄", "🎄", "🎄"];
type test_0_actual = FindSanta<Forest0>;
type test_0_expected = 0;

type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

// test 2
type Forest1 = ["🎄", "🎅🏼", "🎄", "🎄", "🎄", "🎄"];
type test_1_actual = FindSanta<Forest1>;
type test_1_expected = 1;

type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

// test 3
type Forest2 = ["🎄", "🎄", "🎅🏼", "🎄"];
type test_2_actual = FindSanta<Forest2>;
type test_2_expected = 2;

type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;

// test 4
type Forest3 = ["🎄", "🎄", "🎄", "🎅🏼", "🎄"];
type test_3_actual = FindSanta<Forest3>;
type test_3_expected = 3;

type test_3 = Expect<Equal<test_3_expected, test_3_actual>>;

// test 5
type Forest4 = ["🎄", "🎄", "🎄", "🎄"];
type test_4_actual = FindSanta<Forest4>;
type test_4_expected = never;

type test_4 = Expect<Equal<test_4_expected, test_4_actual>>;
