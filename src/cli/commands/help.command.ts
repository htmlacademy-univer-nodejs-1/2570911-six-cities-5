import { Command } from './command.interface.js';
import { COLORS } from '../colors.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    const {BLUE, CYAN, MAGENTA} = COLORS;
    console.info(`
        Программа для подготовки данных для REST API сервера.
        Пример: cli.js --${BLUE('<command>')} [${CYAN('--arguments')}]
        Команды:
            ${CYAN('--version')}:                   ${MAGENTA('# выводит номер версии')}
            ${CYAN('--help')}:                      ${MAGENTA('# печатает этот текст')}
            ${CYAN('--import')} <path>:             ${MAGENTA('# импортирует данные из TSV')}
            ${CYAN('--generate')} <n> <path> <url>  ${MAGENTA('# генерирует произвольное количество тестовых данных')}
    `);
  }
}
