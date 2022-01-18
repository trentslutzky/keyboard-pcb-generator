function choc(xpos,ypos){
  return(
`
  (footprint "PG1350" (layer "F.Cu")
    (tedit 5DD50112) (tstamp 01d93ff3-3678-4d2a-be94-e16535bd022f)
    (at ${xpos} ${ypos})
    (attr through_hole)
    (fp_line (start -7 -6) (end -7 -7) (layer "Dwgs.User") (width 0.15) (tstamp 080e59dc-57b1-4e5e-ba33-cd639c9a545e))
    (fp_line (start 7 -7) (end 7 -6) (layer "Dwgs.User") (width 0.15) (tstamp 33cab748-dbb5-4032-a550-b2472aae59c7))
    (fp_line (start -7 7) (end -6 7) (layer "Dwgs.User") (width 0.15) (tstamp 4e8a09c1-9341-491c-8fe3-7023f35090f0))
    (fp_line (start -6 -7) (end -7 -7) (layer "Dwgs.User") (width 0.15) (tstamp 526f6ba7-a519-4c28-a78a-a227d92b6783))
    (fp_line (start -9 -8.5) (end 9 -8.5) (layer "Dwgs.User") (width 0.15) (tstamp 5b957853-7b7c-43c3-a6c7-97ce98dd0f22))
    (fp_line (start 7 -7) (end 6 -7) (layer "Dwgs.User") (width 0.15) (tstamp 626095eb-0531-4cac-928a-2a7037f81b0d))
    (fp_line (start -9 8.5) (end -9 -8.5) (layer "Dwgs.User") (width 0.15) (tstamp 6ad15ba1-14f2-4b83-879e-b6762256d6b7))
    (fp_line (start 6 7) (end 7 7) (layer "Dwgs.User") (width 0.15) (tstamp 74a156a3-3820-4877-8625-dadea96df98c))
    (fp_line (start 9 8.5) (end -9 8.5) (layer "Dwgs.User") (width 0.15) (tstamp 82ffc082-5e79-444e-ab24-77c0d730352a))
    (fp_line (start 9 -8.5) (end 9 8.5) (layer "Dwgs.User") (width 0.15) (tstamp 99f80a62-5038-4c47-a363-1656749f1df3))
    (fp_line (start 7 6) (end 7 7) (layer "Dwgs.User") (width 0.15) (tstamp d21eb85d-240d-46ba-ba52-7f5bc2e11a3c))
    (fp_line (start -7 7) (end -7 6) (layer "Dwgs.User") (width 0.15) (tstamp e770160b-c1f2-4ca5-87c1-63e03eb2a966))
    (pad "" np_thru_hole circle locked (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask) (tstamp 1e2633c2-c6e6-4d36-8291-57937a5bd7f4))
    (pad "" np_thru_hole circle locked (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask) (tstamp 44af2d73-9ddc-43cc-8cca-b16fcc63d9fb))
    (pad "" np_thru_hole circle locked (at -5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask) (tstamp 6c9b0223-a7b1-4906-be51-046fedf1a049))
    (pad "" np_thru_hole circle locked (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask) (tstamp 70d68c1d-cbe2-45f2-af40-0a6343089d6e))
    (pad "" np_thru_hole circle locked (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask) (tstamp 81d06e4d-c333-4263-ac24-58471fa1bc49))
    (pad "" np_thru_hole circle locked (at 5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask) (tstamp 837b3823-8d87-46ce-8faa-f0211295f6c5))
    (pad "" np_thru_hole circle locked (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask) (tstamp d2a4c9bc-26e0-4eae-bebf-7c271e455afd))
    (pad "1" smd rect locked (at -3.275 -5.95) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask")
      (net 1 "column_net") (tstamp 6b95a555-cc76-4e27-a1cd-5121e2bf4d0b))
    (pad "1" smd rect locked (at 3.275 -5.95) (size 2.6 2.6) (layers "F.Cu" "F.Paste" "F.Mask")
      (net 1 "column_net") (tstamp db75ecc5-fc77-4b70-a1aa-808e09b8c00b))
    (pad "2" smd rect locked (at -8.275 -3.75) (size 2.6 2.6) (layers "F.Cu" "F.Paste" "F.Mask")
      (net 2 "GND") (tstamp ba3e5d2f-51ce-4149-97e5-9e66461d5f2d))
    (pad "2" smd rect locked (at 8.275 -3.75) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask")
      (net 2 "GND") (tstamp e76c04f5-10d7-424b-a848-0f9084d7abba))
  )
`
  )
}

module.exports = {
  choc:choc
}

