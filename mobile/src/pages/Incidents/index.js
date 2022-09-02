import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api.js';

// logo
import logoImg from '../assets/logo.png';

// css
import styles from './styles.js';

function Incidents() {

    // incidents list
    const [incidents, setIncidents] = useState([]);

    // total incidents
    const [total, setTotal] = useState(0);
    
    // page
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // navigation
    const navigation = useNavigation();

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    // load incidents
    async function loadIncidents() {

        // all incidents are loaded
        if (loading) { return; }
        if (total > 0 && incidents.length == total) { return; }
        
        // start loading the incidents
        setLoading(true);

        const response = await api.get('incidents', {
            params: { page },
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    };

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={ styles.container }>

            {/* header */}
            <View style={ styles.header }>
                <Image source={ logoImg } />
                <Text style={ styles.headerText }>
                    Total: <Text style={ styles.headerTextBold }>{ total } incidents</Text>.
                </Text>
            </View>

            { /* section */ }
            <Text style={ styles.title }>Welcome!</Text>
            <Text style={ styles.description }>Pick an incident and save the day!</Text>

            { /* incidents */ }

            <FlatList 
                data={ incidents }
                style={ styles.incidentList }
                keyExtractor={ incident => String(incident.id) }
                showsVerticalScrollIndicator={ true }
                onEndReached={ loadIncidents }
                onEndReachedThreshold={ 0.2 }
                renderItem={({ item: incident }) => (
                    <View style={ styles.incident }>
                        <Text style={ styles.incidentProperty }>ONG:</Text>
                        <Text style={ styles.incidentValue }>{ incident.name }</Text>

                        <Text style={ styles.incidentProperty }>Incident:</Text>
                        <Text style={ styles.incidentValue }>{ incident.title }</Text>

                        <Text style={ styles.incidentProperty }>Value:</Text>
                        <Text style={ styles.incidentValue }>
                            { Intl.NumberFormat('pt-BR', { 
                                style: 'currency', currency: 'BRL' 
                            }).format(incident.value) }
                        </Text>

                        <TouchableOpacity 
                            style={ styles.detailsButton }
                            onPress={ () => navigateToDetail(incident) }>
                                
                            <Text style={ styles.detailsButtonText }>See more details</Text>
                            <Feather name='arrow-right' size={16} color='#e02041' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default Incidents;