import { Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>['name'];
  text?: string | number;
};

export default function IconButton({ icon, text }: IconButtonProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <EvilIcons name={icon} size={22} color='gray' />
      <Text style={{ fontSize: 12, color: 'gray' }}>123</Text>
    </View>
  );
}
