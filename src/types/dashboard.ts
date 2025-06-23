export interface CallMetrics {
  totalCalls: number;
  weeklyChange: number;
  monthlyChange: number;
  appointmentsBooked: number;
  appointmentRate: number;
  averageCallDuration: number;
  activeAgents: number;
}

export interface RecentCall {
  id: string;
  agentName: string;
  customerPhone: string;
  duration: string;
  appointmentBooked: boolean;
  timestamp: string;
  status: "completed" | "in-progress" | "failed";
}

export interface CallRecord {
  id: string;
  agentName: string;
  customerPhone: string;
  customerName: string;
  duration: string;
  appointmentBooked: boolean;
  timestamp: string;
  status: "completed" | "in-progress" | "failed";
  transcript: string;
  summary: string | null;
  appointments: {
    customer_name: string;
  }[];
}

export interface CallRecord {
id: string;
  agentName: string;
  customerPhone: string;
  customerName: string;
  duration: string;
  appointmentBooked: boolean;
  timestamp: string;
  status: "completed" | "in-progress" | "failed";
  transcript: string;
  summary: string | null;
  appointments: {
    customer_name: string;
  }[];
}
export interface CallRecord {
  id: string;
  agentName: string;
  customerPhone: string;
  customerName: string;
  duration: string;
  appointmentBooked: boolean;
  timestamp: string;
  status: "completed" | "in-progress" | "failed";
  transcript: string;
  summary: string | null;
  appointments: {
    customer_name: string;
  }[];
}
export interface AppointmentDetails {
  date: string;
  time: string;
  email: string;
  reason: string;
  notes: string;
}

export interface Appointment {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  appointmentDate: string;
  appointmentTime: string;
  reason: string;
  status: "scheduled" | "completed" | "cancelled";
  agentName: string;
  notes: string;
  callId: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive" | "busy";
  totalCalls: number;
  appointmentsBooked: number;
  averageCallDuration: number;
}

// Retell AI specific types
export interface RetellCallResponse {
  call_id: string;
  agent_name?: string;
  from_number: string;
  customer_name?: string;
  call_length_seconds: number;
  appointment_booked?: boolean;
  start_timestamp: string;
  call_status: string;
  transcript?: string;
  appointment_details?: {
    date: string;
    time: string;
    email: string;
    reason: string;
    notes: string;
  };
}

export interface RetellMetricsResponse {
  total_calls: number;
  weekly_change: number;
  monthly_change: number;
  appointments_booked: number;
  appointment_rate: number;
  average_duration: number;
  active_agents: number;
}
