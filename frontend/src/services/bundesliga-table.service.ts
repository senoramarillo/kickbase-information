import {BundesligaTable, BundesligaTableEntry, bundesligaTableEntryFromApiResponse} from '../models/bundesliga-table';
import {BUNDESLIGATABLE_API_CONFIG} from '../../base-path.mjs';

export class BundesligaTableService {

    private readonly BASE_URL: string = BUNDESLIGATABLE_API_CONFIG.BASE_URL;
    private readonly defaultOpts: RequestInit = BUNDESLIGATABLE_API_CONFIG.DEFAULT_OPTS;

    public async getData(): Promise<BundesligaTable> {
        try {
            const response = await fetch(this.BASE_URL, this.defaultOpts);
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }

            const rawTableData: any = await response.json();
            return this.transformApiResponse(rawTableData);

        } catch (error) {
            console.error('Error fetching Bundesliga table data:', error);
            throw error;
        }
    }

    private transformApiResponse(rawTableData: any): BundesligaTable {
        const teams: BundesligaTableEntry[] = rawTableData.t.map(bundesligaTableEntryFromApiResponse);
        return {
            matchDay: rawTableData.md,
            currentMatchDay: rawTableData.cmd,
            teams
        };
    }
}

export const bundesligaTableService = new BundesligaTableService();
