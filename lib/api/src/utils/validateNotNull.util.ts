const validateNotNull = (val: any, ctx: string) => {
  if (val === undefined || val === null || val.length === 0 || val === {}) {
    throw new Error(`${ctx ?? 'value'} is not a valid value`);
  }
};

export default validateNotNull;
