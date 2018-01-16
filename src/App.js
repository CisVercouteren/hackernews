import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Table from "./Table";
import Button from "./Button";
import Loading from "./Loading";

const DEFAULT_QUERY = "redux",
    DEFAULT_HPP = 100,
    PATH_BASE = "https://hn.algolia.com/api/v1",
    PATH_SEARCH = "/search",
    PARAM_SEARCH = "query=",
    PARAM_PAGE = "page=",
    PARAM_HPP = "hitsPerPage=";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            searchKey: "",
            searchTerm: DEFAULT_QUERY,
            error: null,
            isLoading: false
        };
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        this.setState({ searchKey: searchTerm });
        this.fetchSearchTopStories(searchTerm);
    }

    setSearchTopStories = result => {
        const { hits, page } = result;
        const { results, searchKey } = this.state;

        const oldHits =
            results && results[searchKey] ? results[searchKey].hits : [];

        const updatedHits = [...oldHits, ...hits];
        this.setState({
            results: {
                ...results,
                [searchKey]: { hits: updatedHits, page }
            },
            isLoading: false
        });
    };

    fetchSearchTopStories = (searchTerm, page = 0) => {
        this.setState({ isLoading: true });
        fetch(
            `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
        )
            .then(r => r.json())
            .then(result => this.setSearchTopStories(result))
            .catch(e => {
                this.setState({ error: e });
            });
    };

    onSearchSubmit = e => {
        const { searchTerm } = this.state;
        this.setState({ searchKey: searchTerm });
        if (this.needsToSearchTopStories(searchTerm))
            this.fetchSearchTopStories(searchTerm);
        e.preventDefault();
    };

    onDismiss = id => {
        const { results, searchKey } = this.state;
        const { hits, page } = results[searchKey];
        const updatedHits = hits.filter(el => id !== el.objectID);
        this.setState({
            results: {
                ...results,
                [searchKey]: { hits: updatedHits, page }
            }
        });
    };

    needsToSearchTopStories = searchTerm => {
        return !this.state.results[searchTerm];
    };
    onChangeSearch = e => {
        this.setState({
            searchTerm: e.target.value
        });
    };

    render() {
        const { searchTerm, results, searchKey, error } = this.state;
        const page =
            (results && results[searchKey] && results[searchKey].page) || 0;
        const list =
            (results && results[searchKey] && results[searchKey].hits) || [];

        return (
            <div className="page">
                <div className="interactions">
                    <ButtonWithLoading
                        isLoading={this.state.isLoading}
                        onClick={() =>
                            this.fetchSearchTopStories(searchKey, page + 1)
                        }
                    >
                        MORE
                    </ButtonWithLoading>
                    <Search
                        value={searchTerm}
                        onChangeSearch={this.onChangeSearch}
                        onSubmit={this.onSearchSubmit}
                    >
                        Search
                    </Search>
                </div>
                {error ? (
                    <p>Something went wrong! </p>
                ) : (
                    <Table
                        list={list}
                        searchValue={searchTerm}
                        onDismiss={this.onDismiss}
                    />
                )}
            </div>
        );
    }
}

const withLoading = Component => ({ isLoading, ...rest }) =>
    isLoading ? <Loading /> : <Component {...rest} />;

const ButtonWithLoading = withLoading(Button);

export default App;
