import React, { createContext, useContext, useState, useEffect } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';

export interface BookingRecord {
  id: string;
  createdAt: string;
  serviceId: string;
  serviceTitle: string;
  emirate: string;
  area: string;
  unitType: string;
  unitCount: number;
  scheduledDate: string;
  scheduledTime: string;
  estimatedPriceAED: number;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  specialNotes?: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
}

interface AppContextType {
  savedServiceIds: string[];
  savedServices: ServiceItem[];
  toggleSaveService: (id: string) => void;
  isServiceSaved: (id: string) => boolean;
  removeSavedService: (id: string) => void;
  clearSavedServices: () => void;
  bookings: BookingRecord[];
  addBooking: (booking: Omit<BookingRecord, 'id' | 'createdAt' | 'status'>) => BookingRecord;
  cancelBooking: (id: string) => void;
  selectedEmirate: string;
  setSelectedEmirate: (emirate: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SAVED_SERVICES: 'thecleanhome_saved_services',
  BOOKINGS: 'thecleanhome_bookings',
  EMIRATE: 'thecleanhome_selected_emirate',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedServiceIds, setSavedServiceIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SAVED_SERVICES);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [bookings, setBookings] = useState<BookingRecord[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      return stored ? JSON.parse(stored) : [
        {
          id: 'BKG-78291',
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          serviceId: 'ac-duct-cleaning',
          serviceTitle: 'AC Duct Cleaning & Sanitization',
          emirate: 'Dubai',
          area: 'Dubai Marina & JBR',
          unitType: '2-Bedroom Apartment',
          unitCount: 2,
          scheduledDate: '2026-11-04',
          scheduledTime: '10:00 AM - 01:00 PM',
          estimatedPriceAED: 1180,
          customerName: 'Aman Kumar',
          customerPhone: '+971 50 123 4567',
          customerEmail: 'aman.client@thecleanhome.me',
          status: 'Confirmed'
        }
      ];
    } catch {
      return [];
    }
  });

  const [selectedEmirate, setSelectedEmirate] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.EMIRATE) || 'Dubai';
    } catch {
      return 'Dubai';
    }
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SAVED_SERVICES, JSON.stringify(savedServiceIds));
    } catch {
      // ignore storage errors
    }
  }, [savedServiceIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    } catch {
      // ignore storage errors
    }
  }, [bookings]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.EMIRATE, selectedEmirate);
    } catch {
      // ignore storage errors
    }
  }, [selectedEmirate]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const toggleSaveService = (id: string) => {
    setSavedServiceIds((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      const service = SERVICES_DATA.find((s) => s.id === id);
      showToast(exists ? `Removed ${service?.title || 'service'} from shortlist` : `Added ${service?.title || 'service'} to shortlist`);
      return updated;
    });
  };

  const isServiceSaved = (id: string) => savedServiceIds.includes(id);

  const removeSavedService = (id: string) => {
    setSavedServiceIds((prev) => prev.filter((item) => item !== id));
    showToast('Service removed from shortlist');
  };

  const clearSavedServices = () => {
    setSavedServiceIds([]);
    showToast('Shortlist cleared');
  };

  const addBooking = (bookingData: Omit<BookingRecord, 'id' | 'createdAt' | 'status'>): BookingRecord => {
    const newBooking: BookingRecord = {
      ...bookingData,
      id: `BKG-${Math.floor(10000 + Math.random() * 90000)}`,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };

    setBookings((prev) => [newBooking, ...prev]);
    showToast(`Booking ${newBooking.id} confirmed! Details saved locally.`);
    return newBooking;
  };

  const cancelBooking = (id: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: 'Cancelled' as const } : b))
    );
    showToast(`Booking ${id} marked as cancelled.`);
  };

  const savedServices = SERVICES_DATA.filter((s) => savedServiceIds.includes(s.id));

  return (
    <AppContext.Provider
      value={{
        savedServiceIds,
        savedServices,
        toggleSaveService,
        isServiceSaved,
        removeSavedService,
        clearSavedServices,
        bookings,
        addBooking,
        cancelBooking,
        selectedEmirate,
        setSelectedEmirate,
        isSearchOpen,
        setIsSearchOpen,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
