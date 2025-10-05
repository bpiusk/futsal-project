require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

app.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  // 1. Register ke Supabase Auth
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  try {
    const userId = data?.user?.id;
    const userName = name || email.split('@')[0];
    console.log('Attempting to insert user:', { id: userId, email, name: userName });
    const { error: insertError } = await supabase
      .from('users')
      .insert([{ id: userId, email, name: userName }]);
    if (insertError) {
      console.error('Insert users error:', insertError);
    } else {
      console.log('Insert users success for:', email);
    }
  } catch (err) {
    console.error('Insert users exception:', err);
  }
  res.json({ message: 'Cek email Anda untuk konfirmasi pendaftaran.' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    console.error('Login error:', error); // log error detail
    return res.status(400).json({ error: error.message });
  }
  res.json({ message: 'Login berhasil!', data });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
