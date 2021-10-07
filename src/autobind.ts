export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  return {
    configurable: true,
    get() {
      const boundFunction = descriptor.value.bind(this);
      return boundFunction;
    }
  };
}
