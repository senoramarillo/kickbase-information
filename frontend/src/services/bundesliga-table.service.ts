import { BundesligaTable, BundesligaTableEntry } from '../models/bundesliga-table';

export class BundesligaTableService {
  public async getData(): Promise<BundesligaTable> {
    // The path `/competition/table` of the kickbase api doesnt work anymore.
    // This should be fixed but for now we just mock the response.
    return this.mockData();
  }

  private mockData(): BundesligaTable {
    const teams: BundesligaTableEntry[] = [
      { goadDifference: 1, matches: 1, points: 3, place: 5, teamId: '43', teamName: 'Leipzig', trend: 0 },
      { goadDifference: 0, matches: 1, points: 1, place: 7, teamId: '10', teamName: 'Bremen', trend: 0 },
      { goadDifference: 0, matches: 1, points: 1, place: 6, teamId: '13', teamName: 'Augsburg', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 12, teamId: '39', teamName: 'St. Pauli', trend: 0 },
      { goadDifference: 0, matches: 1, points: 1, place: 9, teamId: '18', teamName: 'Mainz 05', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 18, teamId: '4', teamName: 'Frankfurt', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 17, teamId: '9', teamName: 'Stuttgart', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 14, teamId: '51', teamName: 'Kiel', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 15, teamId: '15', teamName: 'M-Gladbach', trend: 0 },
      { goadDifference: 1, matches: 1, points: 3, place: 3, teamId: '14', teamName: 'Hoffenheim', trend: 0 },
      { goadDifference: 0, matches: 1, points: 1, place: 8, teamId: '40', teamName: 'Union', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 16, teamId: '24', teamName: 'Bochum', trend: 0 },
      { goadDifference: 1, matches: 1, points: 3, place: 4, teamId: '7', teamName: 'Bayer 04', trend: 0 },
      { goadDifference: 2, matches: 1, points: 3, place: 1, teamId: '5', teamName: 'Freiburg', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 13, teamId: '11', teamName: 'Wolfsburg', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 11, teamId: '2', teamName: 'Bayern', trend: 0 },
      { goadDifference: 2, matches: 1, points: 3, place: 2, teamId: '3', teamName: 'Dortmund', trend: 0 },
      { goadDifference: 0, matches: 0, points: 0, place: 10, teamId: '50', teamName: 'Heidenheim', trend: 0 }
      // { goadDifference: 0, matches: 0, points: 0, place: 16, teamId: '20', teamName: 'Hertha', trend: 0 }
      // { goadDifference: 0, matches: 0, points: 0, place: 7, teamId: '28', teamName: 'Köln', trend: 0 },
      // { goadDifference: 0, matches: 0, points: 0, place: 18, teamId: '8', teamName: 'Schalke', trend: 0 },
      // { goadDifference: 0, matches: 0, points: 0, place: 18, teamId: '42', teamName: 'Darmstadt', trend: 0 },
    ];
    const bundesligaTable: BundesligaTable = {
      matchDay: 1,
      currentMatchDay: 1,
      teams
    };
    return bundesligaTable;
  }
}

export const bundesligaTableService = new BundesligaTableService();
