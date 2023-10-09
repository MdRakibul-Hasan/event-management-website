<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: - B: `ReferenceError: greetign is not defined`</b></summary>
<p>

#### Answer: ?

<i>'greetign' is not a variable or result from a function. 
It is not declared. it's just a word whose value is an empty object. 
If it were declared then the answer would be undefined because of an empty object. </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: - C: "12"</b></summary>
<p>

#### Answer: ?

<i>The value of a is a number but the value of b is a string. That's why  Javascript will not add those 2 numbers like real mathematics. Javascript will concatenate it and make a string "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: - A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>There are some lines of code but the value of 'food' is unchanged. That's why when console.log it, should show the value of the 'food' array which is `['🍕', '🍫', '🥑', '🍔']`</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: - B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>In this small function, it takes one parameter. but the value of the parameter is passed empty when calling the function. That's why it will return undefined inside of the string dynamically.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer: - C: 3</b></summary>
<p>

#### Answer: ?

<i>In this function is used forEach method that will check every element of the num array. And according to the condition, if it finds a true number it will count it as a number digit. Then increase the index position and check again. As 0 is a false number that's why it will skip in the first position. So the total number of the final value or the count will be 3.</i>

</p>
</details>
