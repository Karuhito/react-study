// ① アロー関数

// 普通の関数
function greet(name) {
    return "Hello" + name;
}
console.log(greet("Taro"));

// アロー関数
const greeting = (name) => {
    return "Hello" + name;
}
console.log(greeting("Taro"))

// アロー関数の短縮版
const greetShort = name => "Hello" + name;
console.log(greetShort("Taro"));

// Reactでよく使われる形
const handleClick = () => {
    console.log("Clicked");
};

// ② 分割代入
// オブジェクトから値を取り出す書き方。
const user = {
    name: "Taro",
    age: 20,
};

// 普通の書き方
// const name = user.name;
// const age = user.age;

// 分割代入
const { name, age } = user;
console.log(name);
console.log(age);

// Reactではこうなる
function Profile({ name, age }) {
    console.log(name);
}

// ③ スプレッド構文
// 配列をコピーしたり追加するときに使う。
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(numbers); // [1, 2, 3]
console.log(newNumbers); // [1, 2, 3, 4, 5]

// React では State更新で必須
// 例 : Todoを追加するとき
// setTodos([...todos, newTodo]);

// ④ map
// 配列を変換する
// const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // 各要素が2倍された新しい配列 [2, 4, 6]

// Reactではリスト表示で使う
const fruits = ["Apple", "Banana", "Cherry"];
fruits.map(fruits => console.log(fruits)); // 各要素を表示

// ⑤ filter
// 条件に合うものだけ残す
const ages = [15, 20, 25, 30];
const adaults = ages.filter(age => age >= 20); // 20歳以上だけのこす
console.log(adaults); // [20, 25, 30]

// Reactでは削除処理で使われることがある
// const newTodos = todos.filter(todo => todo.id !== id ); // idが違うものだけ残す

// ミニ課題
// numbers = [1, 2, 3]
// ① 2倍にする
// ② 6以上だけ残す
const result = numbers
  .map(num => num * 2)
  .filter(num => num >= 6);

console.log(result);