import React, { PureComponent } from "react";

import { FlatList, ScrollView, RefreshControl } from "react-native";

import ComicsCard from "../ComicsCard/ComicsCard";
import MainTitle from "../MainTitle/MainTitle";
import ActivityIndicator from "../ActivityIndicator/ActivityIndicator";

class ComicsList extends PureComponent {
  _isMounted = false;
  state = {
    comicsList: [],
    loading: true,
    refreshing: false
  };

  static navigationOptions = {
    title: "List of Comics"
  };

  onRefresh = () => {
    this.setState({ refreshing: true, comicsList: [] });

    this.wait(2000).then(() => {
      this.getData();
      this.setState({ refreshing: false });
    });
  };

  wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  async getData() {
    this._isMounted = true;
    const urlsID = [37, 36, 35, 34, 33, 32, 31];

    let requests = urlsID.map(number =>
      fetch(`https://xkcd.com/${number}/info.0.json`)
    );

    Promise.all(requests)
      .then(responses => responses)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(comicsData =>
        comicsData.forEach(item => {
          if (this._isMounted) {
            this.setState(prevState => ({
              comicsList: [...prevState.comicsList, item],
              loading: false
            }));
          }
        })
      );
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { comicsList, loading, refreshing } = this.state;
    const { navigation } = this.props;
    if (!loading) {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.onRefresh}
            />
          }
        >
          <MainTitle text="XKCD" />
          <FlatList
            data={comicsList}
            renderItem={data => (
              <ComicsCard {...data} navigation={navigation} />
            )}
            keyExtractor={item => item.title}
          />
        </ScrollView>
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

export default ComicsList;
