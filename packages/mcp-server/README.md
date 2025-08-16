# Phoebe TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export EBIRD_API_KEY="My API Key"
npx -y phoebe-ebird-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "phoebe_ebird_api": {
      "command": "npx",
      "args": ["-y", "phoebe-ebird-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "EBIRD_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------------- | ------------------------ | --------------- |
| `X-eBirdApiToken` | `apiKey` | APIKeyHeader |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "phoebe_ebird_api": {
      "url": "http://localhost:3000",
      "headers": {
        "X-eBirdApiToken": "My API Key"
      }
    }
  }
}
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "phoebe-ebird-mcp/server";

// import a specific tool
import listObservationsDataRecent from "phoebe-ebird-mcp/tools/data/observations/recent/list-observations-data-recent";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [listObservationsDataRecent, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `data.observations.recent`:

- `list_observations_data_recent` (`read`): Get the list of recent observations (up to 30 days ago) of birds seen
  in a country, state, county, or location. Results include only the most recent observation for each species in the region specified.

### Resource `data.observations.recent.notable`:

- `list_recent_observations_data_notable` (`read`): Get the list of recent, notable observations (up to 30 days ago) of birds seen in a country, region or location. Notable observations can be for locally or nationally rare species or are otherwise unusual, e.g. over-wintering birds in a species which is normally only a summer visitor.

### Resource `data.observations.recent.species`:

- `retrieve_recent_observations_data_species` (`read`): Get the recent observations, up to 30 days ago, of a particular species
  in a country, region or location. Results include only the most recent observation from each location in the region specified.

  #### Notes

  The species code is typically a 6-letter code, e.g. cangoo for Canada Goose. You can
  get complete set of species code from the GET eBird Taxonomy end-point.

  When using the _r_ query parameter set the _regionCode_ URL parameter to an empty string.

### Resource `data.observations.recent.historic`:

- `list_recent_observations_data_historic` (`read`): Get a list of all taxa seen in a country, region or location on a specific date, with the specific observations determined by the "rank" parameter (defaults to latest observation on the date).
  #### Notes Responses may be cached for 30 minutes

### Resource `data.observations.geo.recent`:

- `list_geo_observations_data_recent` (`read`): Get the list of recent observations (up to 30 days ago) of birds seen
  at locations within a radius of up to 50 kilometers, from a given set
  of coordinates. Results include only the most recent observation for each species in the region specified.

### Resource `data.observations.geo.recent.species`:

- `list_recent_geo_observations_data_species` (`read`): Get all observations of a species, seen up to 30 days ago, at any location within a radius of up to 50 kilometers, from a given set of coordinates. Results include only the most recent observation from each location in the region specified.

  #### URL parameters

  | Name        | Description             |
  | ----------- | ----------------------- |
  | speciesCode | The eBird species code. |

  #### Notes

  The species code is typically a 6-letter code, e.g. horlar for Horned Lark. You can get complete set of species code from the GET eBird Taxonomy end-point.

### Resource `data.observations.geo.recent.notable`:

- `list_recent_geo_observations_data_notable` (`read`): Get the list of notable observations (up to 30 days ago) of birds seen at locations within a radius of up to 50 kilometers, from a given set of coordinates. Notable observations can be for locally or nationally rare species or are otherwise unusual, for example over-wintering birds in a species which is normally only a summer visitor.

### Resource `data.observations.nearest.geo_species`:

- `list_nearest_observations_data_geo_species` (`read`): Find the nearest locations where a species has been seen recently. #### Notes The species code is typically a 6-letter code, e.g. barswa for Barn Swallow. You can get complete set of species code from the GET eBird Taxonomy end-point.

### Resource `product.lists`:

- `retrieve_product_lists` (`read`): Get information on the most recently submitted checklists for a region.

### Resource `product.lists.historical`:

- `retrieve_lists_product_historical` (`read`): Get information on the checklists submitted on a given date for a country or region.

### Resource `product.top100`:

- `retrieve_product_top100` (`read`): Get the top 100 contributors on a given date for a country or region.

  #### Notes

  The results are updated every 15 minutes.

  When ordering by the number of completed checklists, the number of species seen will always be zero. Similarly when ordering by the number of species seen the number of completed checklists will always be zero.
  <b>Selected Response Field Notes</b>

  profileHandle - if a user has enabled their profile, this is the handle to reach it via ebird.org/ebird/profile/{profileHandle}

  numSpecies - always zero when checklistSort parameter is true. Invalid observations ARE included in this total
  numCompleteChecklists - always zero when checklistSort parameter is false

### Resource `product.stats`:

- `retrieve_product_stats` (`read`): Get a summary of the number of checklist submitted, species seen and contributors on a given date for a country or region.
  #### Notes The results are updated every 15 minutes.

### Resource `product.speciesList`:

- `list_product_species_list` (`read`): Get a list of species codes ever seen in a region, in taxonomic order (species taxa only)
  #### Notes The results are usually updated every 10 seconds for locations, every day for larger regions.

### Resource `product.checklist`:

- `view_product_checklist` (`read`): Get the details and observations of a checklist.
  #### Notes Do NOT use this to download large amounts of data. You will be banned if you do. In the fields for each observation, the following fields are duplicates or obsolete and will be removed at a future date: _howManyAtleast_, _howManyAtmost_, _hideFlags_, _projId_, _subId_, _subnational1Code_ and _present_.

### Resource `ref.region.adjacent`:

- `list_region_ref_adjacent` (`read`): Get the list of countries or regions that share a border with this one. #### Notes Only subnational2 codes in the United States, New Zealand, or Mexico are currently supported

### Resource `ref.region.info`:

- `retrieve_region_ref_info` (`read`): Get information on the name and geographical area covered by a region.

  #### Notes

  Taking Madison County, New York, USA (location code US-NY-053) as an example
  the various values for the regionNameFormat query parameter work as follows:

  | Value          | Description                                | Result                           |
  | -------------- | ------------------------------------------ | -------------------------------- |
  | detailed       | return a detailed description              | Madison County, New York, US     |
  | detailednoqual | return the name to the subnational1 level  | Madison, New York                |
  | full           | return the full description                | Madison, New York, United States |
  | namequal       | return the qualified name                  | Madison County                   |
  | nameonly       | return only the name of the region         | Madison                          |
  | revdetailed    | return the detailed description in reverse | US, New York, Madison County     |

### Resource `ref.region.list`:

- `list_region_ref_list` (`read`): Get the list of sub-regions for a given country or region. #### Notes Not all combinations of region type and region code are valid. You can fetch all the subnational1 or subnational2 regions for a country however you can only specify a region type of 'country' when using 'world' as a region code.

### Resource `ref.hotspot`:

- `list_ref_hotspot` (`read`): Hotspots in a region

### Resource `ref.hotspot.geo`:

- `retrieve_hotspot_ref_geo` (`read`): Get the list of hotspots, within a radius of up to 50 kilometers, from a given set of coordinates.

### Resource `ref.hotspot.info`:

- `retrieve_hotspot_ref_info` (`read`): Get information on the location of a hotspot. #### Notes This API call only works for hotspots. If you pass the location code for a private location or an invalid location code then an HTTP 410 (Gone) error is returned.

### Resource `ref.taxonomy.ebird`:

- `retrieve_taxonomy_ref_ebird` (`read`): Get the taxonomy used by eBird. #### Notes Each entry in the taxonomy contains a species code for example, barswa for Barn Swallow. You can download the taxonomy for selected species using the _species_ query parameter with a comma separating each code. Otherwise the full taxonomy is downloaded.

### Resource `ref.taxonomy.forms`:

- `list_taxonomy_ref_forms` (`read`): For a species, get the list of subspecies recognised in the taxonomy. The results include the species that was passed in.

### Resource `ref.taxonomy.locales`:

- `list_taxonomy_ref_locales` (`read`): Returns the list of supported locale codes and names for species common names, with the last time they were updated. Use the accept-language header to get translated language names when available.

  NOTE: The locale codes and names are stable but the other fields in this result are not yet finalized and should be used with caution.

### Resource `ref.taxonomy.versions`:

- `list_taxonomy_ref_versions` (`read`): Returns a list of all versions of the taxonomy, with a flag indicating which is the latest.

### Resource `ref.taxonomy.speciesGroups`:

- `list_taxonomy_ref_species_groups` (`read`): Get the list of species groups, e.g. terns, finches, etc. #### Notes Merlin puts like birds together, with Falcons next to Hawks, whereas eBird follows taxonomic order.
