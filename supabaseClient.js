// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://ohbpwiftmqnhextjmqpq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oYnB3aWZ0bXFuaGV4dGptcXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTc4MjYsImV4cCI6MjA2MjAzMzgyNn0.EKvg1YYE4qzbsE7Jc4xUqOaU9AiOQlfoHlOfJP6THjI'
)
