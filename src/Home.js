import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, ActivityIndicator, FlatList } from 'react-native';







const Home = (props) => {

    const { navigation } = props
    const [countryList, setCountryList] = React.useState([]);
    const [loader, setLoader] = React.useState(false)


    React.useEffect(() => {
        fetchCountryList();
    }, [])

    const fetchCountryList = () => {

        setLoader(true)


        fetch("https://coronavirus-19-api.herokuapp.com/countries", {
            method: "get",
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",

            },

        }).then(res => res.json())
            .then(res => {


                setCountryList(res)

                setLoader(false)




            })
            .catch(err => {
                console.error("error  : ", err);

            });
    }


    return (

        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 5 }}>
                <FlatList
                    data={countryList}
                    renderItem={({ item }) => <View style={{
                        width: '100%', height: 95, marginTop: 3,
                        backgroundColor: 'white', elevation: 5, flexDirection: 'row'
                    }}>
                        <View style={{ alignItems: 'center', width: '100%' }}>
                            <Text style={{backgroundColor:'#072d69',width:'100%',textAlign:'center',
                            fontWeight:'bold',color:'white'}}>
                                {item.country}
                            </Text>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'#bcc4d1' }}>
                                <View style={{alignItems:'center'}}>
                                    <Text>
                                        Case
                                    </Text>
                                    <Text>
                                        {item.cases}
                                    </Text>
                                </View>

                                <View style={{alignItems:'center'}}>
                                    <Text>
                                        Deaths
                                    </Text>
                                    <Text>
                                        {item.deaths}
                                    </Text>
                                </View>

                                <View style={{alignItems:'center'}}>
                                    <Text>
                                        Recovered
                                    </Text>
                                    <Text>
                                        {item.recovered}
                                    </Text>
                                </View>

                            </View>

                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'#dde2eb' }}>
                                <View style={{alignItems:'center'}}>
                                    <Text>
                                        Today Case
                                    </Text>
                                    <Text>
                                        {item.todayCases}
                                    </Text>
                                </View>

                                <View style={{alignItems:'center'}}>
                                    <Text>
                                       Today Deaths
                                    </Text>
                                    <Text>
                                        {item.todayDeaths}
                                    </Text>
                                </View>

                                <View style={{alignItems:'center'}}>
                                    <Text>
                                        Critical
                                    </Text>
                                    <Text>
                                        {item.critical}
                                    </Text>
                                </View>

                            </View>


                        </View>

                    </View>} />
            </View>
            {loader && <View style={{ width: '100%', height: '100%', backgroundColor: 'transparent', position: 'absolute', justifyContent: 'center' }}><ActivityIndicator color='red' /></View>}
        </View>
    );
};

export default Home;