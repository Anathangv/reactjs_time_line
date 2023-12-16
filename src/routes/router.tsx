import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { DefaultLayout } from '../components/DefaultLayout'
import { NewMemory } from '../pages/NewMemory'
import { ViewMemory } from '../pages/ViewMemory'


export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/"  element={<Home />}/>
        <Route path="/Memory/New" element={<NewMemory />}/>
        <Route path="/Memory/View/:id" element={<ViewMemory />}/>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Route>
    </Routes>
  )
}
