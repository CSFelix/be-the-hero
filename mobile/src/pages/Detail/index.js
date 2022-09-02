import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

// logo
import logoImg from '../assets/logo.png';

// css
import styles from './styles.js';

function Detail() {

    // loaded incident
    const route = useRoute();
    const incident = route.params.incident;

    // navigate
    const navigation = useNavigation();
    const message = `Hey there ${ incident.name }, because I would like to help you out with the "${ incident.title }: ${ incident.description }" Incident with the reward of ${ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value) }`;

    // back to incidents
    function navigateBack() {
        navigation.goBack();
    }

    // contact by email
    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Incident's Hero: ${ incident.title }`,
            recipients: [incident.email],
            body: message,
        });
    }

    // contact by whatsapp
    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${ incident.whatsapp }&text=${message}`);
    }

    return (
        <View style={ styles.container }>

            {/* header */}
            <View style={ styles.header }>
                <Image source={ logoImg } />
                
                <TouchableOpacity onPress={ navigateBack }>
                    <Feather name='arrow-left' size={28} color='#e82041' />
                </TouchableOpacity>
            </View>

            {/* incident's info */}
            <View style={ styles.incident }>
                <Text style={ [styles.incidentProperty, { marginTop: 0 }] }>ONG:</Text>
                <Text style={ styles.incidentValue }>{ incident.name } from { incident.city } / { incident.uf }</Text>

                <Text style={ styles.incidentProperty }>Incident:</Text>
                <Text style={ styles.incidentValue }>{ incident.title }</Text>

                <Text style={ styles.incidentProperty }>Value:</Text>
                <Text style={ styles.incidentValue }>
                    { Intl.NumberFormat('pt-BR', { 
                    style: 'currency', currency: 'BRL' 
                    }).format(incident.value) }
                </Text>
            </View>

            <View style={ styles.contactBox }>
                <Text style={ styles.heroTitle }>Save the Day!</Text>
                <Text style={ styles.heroTitle }>Be the hero for this incident.</Text>

                <Text style={ styles.heroDescription }>Reach the ONG:</Text>

                <View style={ styles.actions }>
                    <TouchableOpacity style= { styles.action } onPress={ sendWhatsApp }>
                        <Text style={ styles.actionText }>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style= { styles.action } onPress={ sendEmail }>
                        <Text style={ styles.actionText }>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Detail;