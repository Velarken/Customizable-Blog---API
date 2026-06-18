const {SUPABASE_PASS} = require('dotenv').config()
const connectionString = `postgresql://postgres.mamtzocjnjmbockpoksl:${SUPABASE_PASS}@aws-1-us-west-2.pooler.supabase.com:6543/postgres`

console.log(SUPABASE_PASS)