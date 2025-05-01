import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';

const initialNotifications = [
  { id: '1', title: 'Welcome!', message: 'Thanks for joining. We hope you have a great experience using the app.', time: '2 min ago', read: false },
  { id: '2', title: 'Update', message: 'A new version is available! Please update to get the latest features and bug fixes.', time: '10 min ago', read: false },
];

const NotificationBoard = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const openNotification = (notification) => {
    setSelectedNotification(notification);
    setModalVisible(true);
    setNotifications((prev) =>
      prev.map((n) => (n.id === notification.id ? { ...n, read: true } : n))
    );
  };

  const handleLongPress = (notification) => {
    setSelectedNotification(notification);
    setDeleteModalVisible(true);
  };

  const deleteNotification = () => {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== selectedNotification?.id)
    );
    setDeleteModalVisible(false);
    setSelectedNotification(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => openNotification(item)}
      onLongPress={() => handleLongPress(item)}
      style={[styles.notification, item.read && styles.read]}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message} numberOfLines={1}>
        {item.message}
      </Text>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      {/* View Notification Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedNotification?.title}</Text>
            <Text style={styles.modalMessage}>{selectedNotification?.message}</Text>
            <Text style={styles.modalTime}>{selectedNotification?.time}</Text>

            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        visible={deleteModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Delete Notification?</Text>
            <Text style={{ marginBottom: 16 }}>
              Are you sure you want to delete this notification?
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Pressable style={[styles.actionButton, { backgroundColor: 'red' }]} onPress={deleteNotification}>
                <Text style={styles.closeButtonText}>Delete</Text>
              </Pressable>

              <Pressable
                style={[styles.actionButton, { backgroundColor: '#888' }]}
                onPress={() => setDeleteModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#fff' 
  },
  heading: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 16,
    marginTop: 20, 
    marginBottom: 20,
  },
  notification: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
  },
  read: {
    backgroundColor: '#e0e0e0',
    borderLeftColor: '#999',
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  message: { fontSize: 14, color: '#555', marginTop: 4 },
  time: { fontSize: 12, color: '#888', marginTop: 4 },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 24,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  modalMessage: { fontSize: 16, color: '#444', marginBottom: 12 },
  modalTime: { fontSize: 12, color: '#888', marginBottom: 16 },
  closeButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: { color: '#fff', fontWeight: 'bold' },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
});

export default NotificationBoard;
