import * as fs from 'fs';

export class TobogganTrajectory {
  private matrix: string[][] = [];

  getTreesOnArea(areaFilePath: string) {
    const fileContent = fs.readFileSync(areaFilePath).toString();
    this.fillMatrixWith(fileContent);
    return this.treesOnMatrixWithPath(3, 1);
  }

  getTreesOnAreaWithSlopes(areaFilePath: string, slopesFilePath: string) {
    let treesMultiplication = 1;
    const areaFileContent = fs.readFileSync(areaFilePath).toString();
    const slopesFileContent = fs.readFileSync(slopesFilePath).toString();
    this.fillMatrixWith(areaFileContent);
    for (const line of slopesFileContent.split('\n')) {
      const rightSteps = parseInt(line.split(' ')[1].replace(',', ''));
      const downSteps = parseInt(line.split(' ')[3].replace('.', ''));
      treesMultiplication *= this.treesOnMatrixWithPath(rightSteps, downSteps);
    }
    return treesMultiplication;
  }

  private fillMatrixWith(fileContent: string) {
    let row = 0;
    for (const line of fileContent.split('\n')) {
      this.matrix[row] = [];
      let column = 0;
      for (const char of line.split('')) {
        this.matrix[row][column] = char;
        column++;
      }
      row++;
    }
  }

  private treesOnMatrixWithPath(rightSteps: number, downSteps: number) {
    let trees = 0;
    let column = rightSteps;

    for (let row = downSteps; row < this.matrix.length; row += downSteps) {
      if (this.matrix[row][column] === '#') {
        trees++;
      }
      column = (column + rightSteps) % this.matrix[row].length;
    }

    return trees;
  }
}
