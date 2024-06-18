import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  isNew: boolean;
  status: string;
}

const NotificationItem = ({ notification }: { notification: Notification }) => {
  const { title, message, timestamp, isNew } = notification;
  const itemStyle = isNew ? styles.newNotification : styles.oldNotification;

  return (
    <View style={[styles.notificationItem, itemStyle]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const Index = () => {
  const notifications: Notification[] = [
    {
      id: 1,
      title: 'New Quiz Available',
      message: 'A new quiz is available for you to take.',
      timestamp: '2024-06-05T10:00:00Z',
      isNew: true,
      status: 'Quiz',
    },
    {
      id: 2,
      title: 'Assignment Due',
      message: 'Your assignment is due today.',
      timestamp: '2024-06-07T23:59:00Z',
      isNew: false,
      status: 'Assignment',
    },
    {
      id: 3,
      title: 'Attendance Required',
      message: 'Don\'t forget to mark your attendance for today\'s class.',
      timestamp: '2024-06-08T09:00:00Z',
      isNew: true,
      status: 'Attendance',
    },
    {
      id: 4,
      title: 'New Quiz Available',
      message: 'A new quiz has been added to your course.',
      timestamp: '2024-06-10T10:00:00Z',
      isNew: true,
      status: 'Quiz',
    },
    {
      id: 5,
      title: 'Assignment Reminder',
      message: 'You have an upcoming assignment deadline.',
      timestamp: '2024-06-12T23:59:00Z',
      isNew: true,
      status: 'Assignment',
    },
    {
      id: 6,
      title: 'Attendance Required',
      message: 'Remember to mark your attendance for tomorrow\'s lecture.',
      timestamp: '2024-06-13T09:00:00Z',
      isNew: true,
      status: 'Attendance',
    },
    {
      id: 7,
      title: 'New Quiz Available',
      message: 'Another new quiz is available for you to take.',
      timestamp: '2024-06-15T10:00:00Z',
      isNew: false,
      status: 'Quiz',
    },
    {
      id: 8,
      title: 'Assignment Due',
      message: 'Your assignment is due next week.',
      timestamp: '2024-06-20T23:59:00Z',
      isNew: true,
      status: 'Assignment',
    },
    {
      id: 9,
      title: 'Attendance Reminder',
      message: 'Please ensure to mark your attendance daily.',
      timestamp: '2024-06-22T09:00:00Z',
      isNew: false,
      status: 'Attendance',
    },
    {
      id: 10,
      title: 'New Quiz Available',
      message: 'Yet another new quiz has been added.',
      timestamp: '2024-06-25T10:00:00Z',
      isNew: true,
      status: 'Quiz',
    },
  ];

  const sortNotificationsByNewness = (notifications: Notification[]) => {
    return [...notifications].sort((a, b) => {
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      return 0;
    });
  };

  const renderNotificationGroup = () => {
    const sortedNotifications = sortNotificationsByNewness(notifications);
    const newNotifications = sortedNotifications.filter(notification => notification.isNew);
    const oldNotifications = sortedNotifications.filter(notification => !notification.isNew);

    return (
      <View>
        {newNotifications.map(notification => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
        {oldNotifications.map(notification => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </View>
    );
  };

  return (
    <ScrollView>
      {renderNotificationGroup()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notificationItem: {
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
    color: '#666',
  },
  timestamp: {
    fontSize: 14,
    color: '#999',
  },
  newNotification: {
    opacity: 1, // Set opacity for new notifications
  },
  oldNotification: {
    opacity: 0.5, // Set opacity for old notifications
  },
});

export default Index;
