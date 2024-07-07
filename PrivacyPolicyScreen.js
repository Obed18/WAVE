import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subheading}>Effective Date: 18th June,2024</Text>

      <Text style={styles.sectionTitle}>Introduction</Text>
      <Text style={styles.text}>
        Wave is a messaging mobile application developed by Wave Network Inc. ("we," "us," "our"). Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). If you do not agree with the terms of this Privacy Policy, please do not access the App.
      </Text>

      <Text style={styles.sectionTitle}>Information We Collect</Text>
      <Text style={styles.subsectionTitle}>Personal Information</Text>
      <Text style={styles.text}>
        When you register to use Wave, we may collect the following information:
        - Name
        - Phone number
        - Email address
        - Profile picture
        - Contacts (with your permission)
      </Text>

      <Text style={styles.subsectionTitle}>Usage Data</Text>
      <Text style={styles.text}>
        We may also collect information on how the App is accessed and used, including:
        - Device information (e.g., model, operating system)
        - IP address
        - App usage data (e.g., features used, time spent on the app)
        - Crash reports and performance data
      </Text>

      <Text style={styles.sectionTitle}>How We Use Your Information</Text>
      <Text style={styles.text}>
        We use the information we collect in the following ways:
        - To provide and maintain the App
        - To improve and personalize your experience
        - To manage your account and provide customer support
        - To communicate with you about updates, promotions, and other information
        - To monitor and analyze usage and trends to improve the App
        - To ensure the security of the App and prevent fraud
      </Text>

      <Text style={styles.sectionTitle}>Disclosure of Your Information</Text>
      <Text style={styles.text}>
        We may share your information in the following situations:
        - With your consent
        - With service providers and partners who perform services on our behalf
        - In response to legal requests (e.g., subpoenas, court orders)
        - To protect our rights, privacy, safety, or property, and that of our users
        - In connection with a merger, sale, or other business transfer
      </Text>

      <Text style={styles.sectionTitle}>Data Security</Text>
      <Text style={styles.text}>
        We use administrative, technical, and physical measures to safeguard your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
      </Text>

      <Text style={styles.sectionTitle}>Your Choices</Text>
      <Text style={styles.text}>
        You can manage your information in the App through the following options:
        - Updating your profile information
        - Changing your privacy settings
        - Opting out of promotional communications
      </Text>

      <Text style={styles.sectionTitle}>Children's Privacy</Text>
      <Text style={styles.text}>
        Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under the age of 13, we will delete such information from our records.
      </Text>

      <Text style={styles.sectionTitle}>Changes to This Privacy Policy</Text>
      <Text style={styles.text}>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. You are advised to review this Privacy Policy periodically for any changes.
      </Text>

      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={styles.text}>
        If you have any questions or concerns about this Privacy Policy, please contact us at:
        {'\n'}
        Wave Network Inc.
        {'\n'}
        Email: wavenetworkinc@gmail.com
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 20,
  },
});

export default PrivacyPolicyScreen;
