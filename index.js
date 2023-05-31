const {deterministicPartitionKey} = require("./dpk");

// Add some test event data to observe the functionality
console.log(deterministicPartitionKey({ partitionKey: "123456" })); // Expected output: "123456"
console.log(deterministicPartitionKey({ data: "Some data" })); // Expected output: Some sha3-512 hash
console.log(deterministicPartitionKey({ partitionKey: "a".repeat(257) })); // Expected output: Some sha3-512 hash
console.log(deterministicPartitionKey()); // Expected output: "0"
