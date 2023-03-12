export function removeSessionStorage(): void {
  sessionStorage.removeItem("status");
  sessionStorage.removeItem("userId");
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userData");
  sessionStorage.removeItem("sportsList");
  sessionStorage.removeItem("eventsList");
  sessionStorage.removeItem("servicesList");
  sessionStorage.removeItem("productsList");
  sessionStorage.removeItem("thirdList");
  sessionStorage.removeItem("lastSession");
}
