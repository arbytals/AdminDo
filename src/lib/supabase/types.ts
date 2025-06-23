export type Database = {
  public: {
    Tables: {
      calls: {
        Row: {
          id: string;
          summary: string | null;
          transcript: string | null;
          recording_url: string | null;
          start_time: string | null;
          end_time: string | null;
          duration: number | null;
          from_number: string | null;
          to_number: string | null;
          agent_id: string | null;
          appointment_booked: boolean | null;
          rating: number | null;
          call_type: string | null;
          successful: boolean | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          summary?: string | null;
          transcript?: string | null;
          recording_url?: string | null;
          start_time?: string | null;
          end_time?: string | null;
          duration?: number | null;
          from_number?: string | null;
          to_number?: string | null;
          agent_id?: string | null;
          appointment_booked?: boolean | null;
          rating?: number | null;
          call_type?: string | null;
          successful?: boolean | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          summary?: string | null;
          transcript?: string | null;
          recording_url?: string | null;
          start_time?: string | null;
          end_time?: string | null;
          duration?: number | null;
          from_number?: string | null;
          to_number?: string | null;
          agent_id?: string | null;
          appointment_booked?: boolean | null;
          rating?: number | null;
          call_type?: string | null;
          successful?: boolean | null;
          created_at?: string | null;
        };
      };
      appointments: {
        Row: {
          id: string;
          call_id: string | null;
          customer_name: string | null;
          customer_email: string | null;
          customer_phone: string | null;
          appointment_date: string | null;
          appointment_time: string | null;
          reason: string | null;
          status: string | null;
          agent_id: string | null;
          notes: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          call_id?: string | null;
          customer_name?: string | null;
          customer_email?: string | null;
          customer_phone?: string | null;
          appointment_date?: string | null;
          appointment_time?: string | null;
          reason?: string | null;
          status?: string | null;
          agent_id?: string | null;
          notes?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          call_id?: string | null;
          customer_name?: string | null;
          customer_email?: string | null;
          customer_phone?: string | null;
          appointment_date?: string | null;
          appointment_time?: string | null;
          reason?: string | null;
          status?: string | null;
          agent_id?: string | null;
          notes?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      agents: {
        Row: {
          id: string;
          name: string | null;
          email: string | null;
          status: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          name?: string | null;
          email?: string | null;
          status?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          name?: string | null;
          email?: string | null;
          status?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      call_metrics: {
        Row: {
          id: string;
          call_id: string | null;
          agent_id: string | null;
          duration: number | null;
          appointment_booked: boolean | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          call_id?: string | null;
          agent_id?: string | null;
          duration?: number | null;
          appointment_booked?: boolean | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          call_id?: string | null;
          agent_id?: string | null;
          duration?: number | null;
          appointment_booked?: boolean | null;
          created_at?: string | null;
        };
      };
      call_outcomes: {
        Row: {
          id: string;
          call_id: string | null;
          outcome: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          call_id?: string | null;
          outcome?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          call_id?: string | null;
          outcome?: string | null;
          created_at?: string | null;
        };
      };
    };
  };
};
