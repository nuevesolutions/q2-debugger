export default function useEnvironment(): string {
  return typeof chrome?.devtools === 'undefined' ? 'tab' : 'panel';
}
