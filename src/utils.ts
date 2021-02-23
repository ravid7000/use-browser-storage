export function parse(input: any) {
  let value
  try {
    value = JSON.parse(input)
    if (typeof value === 'undefined') {
      value = input
    }
    if (value === 'true') {
      value = true
    }
    if (value === 'false') {
      value = false
    }
    if (parseFloat(value) === value && typeof value !== 'object') {
      value = parseFloat(value)
    }
  } catch (e) {
    value = input
  }
  return value
}

export function safeUpdateCount(count: number) {
  if (count >= Number.MAX_SAFE_INTEGER) {
    count = -1;
  }

  return count + 1;
}
