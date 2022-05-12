import chalk from 'chalk';
import { Model } from '../types/types';

export function generateModelFile(model: Model, fileName: string) {
    console.log(chalk.green(`Generating model ${fileName} for ${model.name}`));
}
