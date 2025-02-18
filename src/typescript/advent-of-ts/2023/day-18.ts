import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type Count<
  Toys extends unknown[],
  Toy extends unknown,
  Counter extends 0[] = [],
> =
  Toys extends [
    infer First extends unknown,
    ...infer Rest extends unknown[]
  ]
  ? Toy extends First
  ? Count<Rest, Toy, [...Counter, 0]>
  : Count<Rest, Toy, Counter>
  : Counter["length"];

type ToySack = [
  "🎸", "🎧", "👟", "👟", "💻", "🪀", "🧩", "🎮",
  "🎨", "🕹️", "📱", "🧩", "🧸", "🎧", "👟", "🚲",
  "📚", "⌚", "🎨", "👟", "🎸", "🧸", "👟", "🎸",
  "📱", "🎧", "🎮", "🎒", "📱", "🧩", "🧩", "🚲",
  "🕹️", "🧵", "📱", "🕹️", "🕰️", "🧢", "🕹️", "👟",
  "🧸", "📚", "🧁", "🧩", "🎸", "🎮", "🧁", "📚",
  "💻", "⌚", "🛹", "🧁", "🧣", "🪁", "🎸", "🧸",
  "🧸", "🧸", "🧩", "🪁", "🏎️", "🏎️", "🧁", "📚",
  "🧸", "🕶️", "💻", "⌚", "⌚", "🕶️", "🎧", "🎧",
  "🎧", "💻", "👟", "🎸", "💻", "🪐", "📚", "🎨",
  "📱", "🎧", "📱", "🎸", "🏎️", "👟", "🚲", "📱",
  "🚲", "🎸"
];

// test 1
type test_0_actual = Count<ToySack, "👟">;
type test_0_expected = 8;

type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

// test 2
type test_1_actual = Count<ToySack, "🧦">;
type test_1_expected = 0;

type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

// test 3
type test_2_actual = Count<ToySack, "🧩">;
type test_2_expected = 6;

type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;

// test 4
type test_3_actual = Count<ToySack, "🛹">;
type test_3_expected = 1;

type test_3 = Expect<Equal<test_3_expected, test_3_actual>>;

// test 5
type test_4_actual = Count<ToySack, "🏎️">;
type test_4_expected = 3;

type test_4 = Expect<Equal<test_4_expected, test_4_actual>>;

// test 6
type test_5_actual = Count<ToySack, "📚">;
type test_5_expected = 5;

type test_5 = Expect<Equal<test_5_expected, test_5_actual>>;
