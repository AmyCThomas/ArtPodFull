git subtree push --prefix backend subdomain master
(cd frontend && exec yarn run build)
(cd frontend && exec netlify deploy --dir=./build --prod)