import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("git.appraise.requestReview", () =>
      vscode.window.showInformationMessage("Hello, World!"),
    ),
  )
}

export function deactivate() {}
