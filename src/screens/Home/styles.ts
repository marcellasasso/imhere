import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130116',
    padding: 24,
  },

  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    marginTop: 36,
    marginBottom: 42,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cd67',

    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
})
