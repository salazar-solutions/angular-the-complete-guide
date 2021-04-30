type ActionEnum<T = string> = { [id: string]: string };

export function actionsForFeature<T extends ActionEnum>(
  moduleName: string,
  actions: T
) {
  const keys: [keyof T, string][] = Object.entries(actions);
  keys.forEach(([n, value]) => {
    actions[n] = ('[' + moduleName + '] ' + value) as T[keyof T];
  });
}
