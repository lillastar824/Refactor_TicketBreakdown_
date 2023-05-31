# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here


## Explanation for the Refactor

The original function was refactored to improve readability and maintainability. Firstly, the hash creation operation was abstracted into a helper function `createHash()`. This way, the logic for creating a hash is encapsulated in one place, making it easier to update or change in the future. 

Next, the null-check for `event` was simplified. Instead of nesting most of the logic within an `if (event)` check, we now return early if `event` is absent. This reduces one level of nesting and makes the code easier to follow.

Then, in deciding the value of `candidate`, a conditional (ternary) operator was used for clarity. This line now clearly shows that if `event.partitionKey` is present, it's used as the `candidate`. If not, we create a hash from the stringified event. 

Lastly, we ensure that if `candidate` isn't a string, it's converted into one. This refactored function is more "readable" than the original as it follows the principle of having a single level of abstraction per function, uses early return to avoid deep nesting, and employs clear and descriptive logic.
