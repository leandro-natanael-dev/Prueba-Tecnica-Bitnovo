import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';
import {Link1} from 'iconsax-react-native';

interface CopyPaymentLinkProps {
  link: string;
}

const CopyPaymentLink: React.FC<CopyPaymentLinkProps> = ({link}) => {
  const linkWithoutHttps = link.replace('https://', '');

  const handleCopyLink = () => {
    Clipboard.setString(link);
    Toast.show({
      type: 'success',
      text1: 'Enlace copiado',
      text2: 'El enlace se ha guardado en el portapapeles',
      position: 'bottom',
      visibilityTime: 2000,
      autoHide: true,
    });
  };

  return (
    <TouchableOpacity style={styles.containerCopyLink} onPress={handleCopyLink}>
      <Link1 size={20} color="#035AC5" variant="Bulk" />
      <Text style={styles.textShareLink}>{linkWithoutHttps}</Text>
    </TouchableOpacity>
  );
};

export default CopyPaymentLink;

const styles = StyleSheet.create({
  containerCopyLink: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 267,
    height: 56,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#D3DCE6',
    paddingHorizontal: 10,
  },
  textShareLink: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.14,
    color: '#002859',
    paddingHorizontal: 10,
  },
});
