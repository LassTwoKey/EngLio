export interface IInfo {
  type: "error" | "success" | "alert" | "default";
  title: string;
  text?: string;
}
