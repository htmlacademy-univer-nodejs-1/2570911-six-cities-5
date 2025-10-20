#!/usr/bin/env node
import { CLIApplication } from './cli-application.js';
import { GenerateCommand } from './commands/generate.command.js';
import { HelpCommand } from './commands/help.command.js';
import { ImportCommand } from './commands/import.command.js';
import { VersionCommand } from './commands/version.command.js';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand(),
    new GenerateCommand(),
  ]);

  cliApplication.processCommand(process.argv);
}

bootstrap();
