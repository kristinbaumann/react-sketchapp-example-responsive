import React from 'react';
import { render, View, Text, StyleSheet } from 'react-sketchapp';

const screenSizes = [
    { name: 'iPhone 7', width: 375, height: 667 }, 
    { name: 'Google Pixel 2', width: 411, height: 731 }, // 411 x 731 
    { name: 'iPhone X', width: 375, height: 812 },
    { name: 'iPad - Portrait', width: 768, height: 1024 }, 
    { name: 'iPad Pro - Portrait', width: 1024, height: 1366 } 
];

const styles = StyleSheet.create({
    app: {
        flexDirection: 'row',
    },
    screen: {
      margin: 20,
    },
    screenText: {
        marginBottom: 10, 
        fontSize: 16
    },
    component: {
        padding: 30,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333'
    },
    componentHeadline: {
        fontSize: 35,
        fontFamily: 'Ubuntu-Bold',
        textAlign: 'center'
    },
    componentButton: {
        backgroundColor: '#333', 
        borderRadius: 10,
        marginTop: 60,
        maxHeight: 64,
        flexGrow: 1,
        flexDirection: 'row',
    },
    componentButtonText: {
        minHeight: 20,
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Ubuntu-Regular',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginVertical: 20, 
        flexGrow: 1,
        maxWidth: 400,
    }
  });

const Screen = ({ name, width, height, children }) => (
    <View style={styles.screen}>
        <Text style={styles.screenText}>Device: {name} ({width}x{height})</Text>
        <View style={{ height: height, width: width, backgroundColor: '#E2E1E2' }}>
            {children}
        </View>
    </View>
);

const Component = () => (
    <View style={styles.component}>
        <Text style={styles.componentHeadline}>Welcome to the React Sketchapp Responsive Example</Text>
        <View style={styles.componentButton}>
            <Text style={styles.componentButtonText}>Check out the code</Text>
        </View>
    </View>
);

const App = () => (
    <View style={styles.app}>
        {screenSizes.map(({ name, width, height }) => 
            <Screen key={name} name={name} width={width} height={height}>
                <Component />
            </Screen>
        )}
    </View>
)

export default (context) => render(<App /> , context.document.currentPage())
