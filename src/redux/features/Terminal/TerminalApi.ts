import {apiSlice} from "../apiSetup";
import API_CONSTANT from "../../../constants/apiContants";

const commandApiInvalidatesTags = apiSlice.enhanceEndpoints({
    addTagTypes: ["Command"],
});

type CommandResponse = string;
const commandAPI = commandApiInvalidatesTags.injectEndpoints({
        endpoints: (build) => ({
            executeCommand: build.mutation<CommandResponse, string>({
                query: (command) => ({
                    url: "/",
                    method: "POST",
                    body: {
                        command: command
                    }
                }),
                invalidatesTags: (res, err, args) => ["Command"]
                // is result available?
            }),
            testEndpoint: build.query<string, void>({
                query: () => "/test",
                providesTags: ["Command"]
            })
        }),
        overrideExisting: false,
    })
;

export const {
    useTestEndpointQuery,
    useExecuteCommandMutation,
} = commandAPI;