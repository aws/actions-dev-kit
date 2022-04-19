import chalk from 'chalk';
import { execute } from '../util/command-wrapper'
import { ProductInfo } from '../types/types';

export async function handleCommand(productInfo: ProductInfo, disconnected: boolean): Promise<number> {
  let validationStatus: number = 0;
  console.log(chalk.green(`Product Info ${Object.values(productInfo)}, disconnected: ${disconnected}`));
  return validationStatus;
}
