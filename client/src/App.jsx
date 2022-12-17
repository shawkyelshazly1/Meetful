import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";
import "./App.css";
import RoutesProvider from "./RoutesProvider";
import { setContext } from "@apollo/client/link/context";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";

function App() {
	// basic http link
	const httpLink = createHttpLink({
		uri: "http://localhost:5000/graphql",
		credentials: "include",
	});

	// auth link with headers
	const authLink = setContext((_, { headers }) => {
		const token = localStorage.getItem("accessToken");
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : "",
			},
		};
	});

	// setup apollo client
	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
		connectToDevTools: true,
	});

	return (
		<div className="App">
			<ApolloProvider client={client}>
				<CurrentUserProvider>
					<RoutesProvider />
				</CurrentUserProvider>
			</ApolloProvider>
		</div>
	);
}

export default App;
