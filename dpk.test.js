const { deterministicPartitionKey } = require("./dpk");

describe('deterministicPartitionKey', () => {
  it('should return "0" when no event is passed', () => {
    expect(deterministicPartitionKey()).toBe("0");
  });

  it('should return the same partition key when passed event has partition key', () => {
    const event = { partitionKey: "123456" };
    expect(deterministicPartitionKey(event)).toBe("123456");
  });

  it('should return hashed partition key when passed event has no partition key', () => {
    const event = { data: "Some data" };
    expect(deterministicPartitionKey(event)).toHaveLength(128);
  });

  it('should return hashed partition key when length of partition key is more than 256', () => {
    const event = { partitionKey: "a".repeat(257) };
    expect(deterministicPartitionKey(event)).toHaveLength(128);
  });
});
