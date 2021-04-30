type ActionEnum = { [key: string]: string };

export function actionsForFeature<T extends ActionEnum>(
  moduleName: string,
  actions: T
) {
  const entries: [keyof T, string][] = Object.entries(actions);
  entries.forEach(([key, value]) => {
    actions[key] = ('[' + moduleName + '] ' + value) as T[keyof T];
  });
}
