type ActionResult = "SUCCESS" | "FAILURE";

interface IActionResult {
  response: ActionResult;
  email?: string
}
