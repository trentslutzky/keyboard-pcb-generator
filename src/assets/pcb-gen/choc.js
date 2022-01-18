function choc(xpos,ypos){

  var footprint_text = (
`
  (footprint "PG1350" (layer "F.Cu")
    (tedit 61E66D3F) (tstamp 01d93ff3-3678-4d2a-be94-e16535bd022f)
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
    (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask) (tstamp 1e2633c2-c6e6-4d36-8291-57937a5bd7f4))
    (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask) (tstamp 44af2d73-9ddc-43cc-8cca-b16fcc63d9fb))
    (pad "" np_thru_hole circle (at -5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask) (tstamp 6c9b0223-a7b1-4906-be51-046fedf1a049))
    (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask) (tstamp 70d68c1d-cbe2-45f2-af40-0a6343089d6e))
    (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask) (tstamp 81d06e4d-c333-4263-ac24-58471fa1bc49))
    (pad "" np_thru_hole circle (at 5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask) (tstamp 837b3823-8d87-46ce-8faa-f0211295f6c5))
    (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask) (tstamp d2a4c9bc-26e0-4eae-bebf-7c271e455afd))
    (pad "1" smd rect (at -3.275 -5.95) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 6b95a555-cc76-4e27-a1cd-5121e2bf4d0b))
    (pad "1" smd rect (at 3.275 -5.95) (size 2.6 2.6) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp db75ecc5-fc77-4b70-a1aa-808e09b8c00b))
    (pad "2" smd rect (at -8.275 -3.75) (size 2.6 2.6) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp ba3e5d2f-51ce-4149-97e5-9e66461d5f2d))
    (pad "2" smd rect (at 8.275 -3.75) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp e76c04f5-10d7-424b-a848-0f9084d7abba))
  )

  (footprint "Diode_SMD:D_SOD-323_HandSoldering" (layer "F.Cu")
    (tedit 61E66CA9) (tstamp 3a00d0fc-a817-429e-a531-4503c4c703a9)
    (at ${xpos+3.883883} ${ypos+4.883883} 135)
    (descr "SOD-323")
    (tags "SOD-323")
    (attr smd)
    (fp_line (start 0.2 0) (end 0.45 0) (layer "F.SilkS") (width 0.1) (tstamp 0cd0fb82-aba9-4acf-a707-56ee6df00a87))
    (fp_line (start 0.2 -0.35) (end 0.2 0.35) (layer "F.SilkS") (width 0.1) (tstamp 25ad8fc8-4b9c-49a7-858e-c5498a60b11d))
    (fp_line (start -0.3 0) (end 0.2 -0.35) (layer "F.SilkS") (width 0.1) (tstamp 55c4d32d-7c5a-4dbb-a08c-04da9db11983))
    (fp_line (start 0.2 0.35) (end -0.3 0) (layer "F.SilkS") (width 0.1) (tstamp 7b11dbfc-add3-40fc-873d-1ab7f08ca71b))
    (fp_line (start -0.3 -0.35) (end -0.3 0.35) (layer "F.SilkS") (width 0.1) (tstamp 9fbf2712-4577-4264-8eb5-122c3429d196))
    (fp_line (start -0.3 0) (end -0.5 0) (layer "F.SilkS") (width 0.1) (tstamp b8595cc4-48ef-4042-b225-fd11825865bc))
    (pad "1" smd rect (at -1.25 0 135) (size 1 1) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 7196c158-16d2-4566-a5ae-6d48113c95a6))
    (pad "2" smd rect (at 1.25 0 135) (size 1 1) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp c43801da-1e79-4854-a0ee-daf3ef81c6e2))
  )

  (footprint "Diode_SMD:D_SOD-323_HandSoldering" (layer "B.Cu")
    (tedit 61E66CA9) (tstamp 1a621e8d-a430-4485-8b13-46273aeb35be)
    (at ${xpos+3.883883} ${ypos+4.883883} 135)
    (descr "SOD-323")
    (tags "SOD-323")
    (attr smd)
    (fp_line (start 0.2 0) (end 0.45 0) (layer "B.SilkS") (width 0.1) (tstamp 0cd0fb82-aba9-4acf-a707-56ee6df00a87))
    (fp_line (start 0.2 0.35) (end 0.2 -0.35) (layer "B.SilkS") (width 0.1) (tstamp 25ad8fc8-4b9c-49a7-858e-c5498a60b11d))
    (fp_line (start -0.3 0) (end 0.2 0.35) (layer "B.SilkS") (width 0.1) (tstamp 55c4d32d-7c5a-4dbb-a08c-04da9db11983))
    (fp_line (start 0.2 -0.35) (end -0.3 0) (layer "B.SilkS") (width 0.1) (tstamp 7b11dbfc-add3-40fc-873d-1ab7f08ca71b))
    (fp_line (start -0.3 0.35) (end -0.3 -0.35) (layer "B.SilkS") (width 0.1) (tstamp 9fbf2712-4577-4264-8eb5-122c3429d196))
    (fp_line (start -0.3 0) (end -0.5 0) (layer "B.SilkS") (width 0.1) (tstamp b8595cc4-48ef-4042-b225-fd11825865bc))
    (pad "1" smd rect (at -1.25 0 135) (size 1 1) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 7196c158-16d2-4566-a5ae-6d48113c95a6))
    (pad "2" smd rect (at 1.25 0 135) (size 1 1) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp c43801da-1e79-4854-a0ee-daf3ef81c6e2))
  )

  (segment (start -3 -1.5) (end -1 -3.5) (width 0.5) (layer "F.Cu") (net 0) (tstamp 11ca59ae-0afc-4490-9013-58ed53803777))
  (segment (start -6 4) (end 3 4) (width 0.5) (layer "F.Cu") (net 0) (tstamp 1bf2f8bc-2a5f-499b-91a7-f064c3ec2edd))
  (segment (start -8.275 1.725) (end -6 4) (width 0.5) (layer "F.Cu") (net 0) (tstamp 2d9771f4-7f5e-4256-89d9-1790072cbef2))
  (segment (start 1.5 -3.5) (end 3.275 -5.275) (width 0.5) (layer "F.Cu") (net 0) (tstamp 4ea60f71-b787-4229-816d-43209717bd44))
  (segment (start 3.275 -5.275) (end 3.275 -5.95) (width 0.5) (layer "F.Cu") (net 0) (tstamp 66d9977b-a804-4d0c-af91-b759291dde07))
  (segment (start -1 -3.5) (end 1.5 -3.5) (width 0.5) (layer "F.Cu") (net 0) (tstamp 78085108-4dcf-47ad-8f68-87b7f5608e71))
  (segment (start 7.5 6.5) (end 5.5 6.5) (width 0.5) (layer "F.Cu") (net 0) (tstamp 950047da-2ef0-48d9-b932-eede9a58ea7a))
  (segment (start -8.275 -3.75) (end -8.275 1.725) (width 0.5) (layer "F.Cu") (net 0) (tstamp b7dac290-1f52-4875-8180-d196bd0f5db5))
  (segment (start 5.5 6.5) (end 4.767766 5.767766) (width 0.5) (layer "F.Cu") (net 0) (tstamp d14da624-165f-468c-b6ce-556c21ee08af))
  (via (at -3 -1.5) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (free) (net 0) (tstamp 2d4a7ca5-a79a-4997-b497-cb719ef476fd))
  (via (at 7.5 6.5) (size 0.8) (drill 0.4) (layers "F.Cu" "B.Cu") (net 0) (tstamp 5eac11a5-d3af-41d0-a437-852c16a4f494))
  (segment (start 7.5 -1.5) (end 4.5 -1.5) (width 0.5) (layer "B.Cu") (net 0) (tstamp 1cbb2eb6-ffe0-453a-88c6-4ab3387990de))
  (segment (start 8.275 -3.75) (end 8.275 -2.275) (width 0.5) (layer "B.Cu") (net 0) (tstamp 1cbce75c-4467-4f9a-9db9-c9232636e167))
  (segment (start 5.5 6.5) (end 4.767766 5.767766) (width 0.5) (layer "B.Cu") (net 0) (tstamp 4b83da4f-d9c1-4976-8000-fb453c61d5ce))
  (segment (start -3 -5.675) (end -3.275 -5.95) (width 0.5) (layer "B.Cu") (net 0) (tstamp 7019cef1-e33a-4830-918e-01aad4234e42))
  (segment (start 7.5 6.5) (end 5.5 6.5) (width 0.5) (layer "B.Cu") (net 0) (tstamp 82815a8f-df0e-48c4-8aa1-b06ca3ab4c93))
  (segment (start 3 0) (end 3 4) (width 0.5) (layer "B.Cu") (net 0) (tstamp a2483d6a-5d48-46b2-875b-593f9130153a))
  (segment (start 4.5 -1.5) (end 3 0) (width 0.5) (layer "B.Cu") (net 0) (tstamp bc7b83bf-0a96-4175-a7ec-6aa9b720d83c))
  (segment (start 8.275 -2.275) (end 7.5 -1.5) (width 0.5) (layer "B.Cu") (net 0) (tstamp cc127915-8dc2-4538-ac3b-255fcec7da93))
  (segment (start -3 -1.5) (end -3 6.5) (width 0.5) (layer "B.Cu") (net 0) (tstamp cffdf152-6fc9-4746-a1ae-3d8b2ceb6529))
  (segment (start -3 -1.5) (end -3 -5.675) (width 0.5) (layer "B.Cu") (net 0) (tstamp ead68eb6-53a5-43de-98dc-ef65a3f6a666))
`
  )

  var footprint_split = footprint_text.split("\n")
  footprint_split.forEach((line,i)=>{
    if(line.includes('segment')){
      var start = []
      var end = []
      const line_split = line.split(/\(|\)/)
      line_split.forEach((ls)=>{
        if(ls.includes('start')){
          start = [
            parseFloat(ls.split(' ')[1])+xpos,
            parseFloat(ls.split(' ')[2])+ypos
          ]
        }
        if(ls.includes('end')){
          end = [
            parseFloat(ls.split(' ')[1])+xpos,
            parseFloat(ls.split(' ')[2])+ypos
          ]
        }
      })
      // console.log(`(start ${start[0]} ${start[1]} )`)
      // console.log(`(end ${end[0]} ${end[1]} )`)
      line = line.replace(
        /start [+-]?([0-9]*[.])?[0-9]+ [+-]?([0-9]*[.])?[0-9]+/,
        `start ${start[0]} ${start[1]}`
      )
      line = line.replace(
        /end [+-]?([0-9]*[.])?[0-9]+ [+-]?([0-9]*[.])?[0-9]+/,
        `end ${end[0]} ${end[1]}`
      )
      footprint_split[i] = line
    }
    if(line.includes('via')){
      var pos = []
      const line_split = line.split(/\)|\(/)
      line_split.forEach((ls)=>{
        if(ls.includes('at')){
          pos = [
            parseFloat(ls.split(' ')[1])+xpos,
            parseFloat(ls.split(' ')[2])+ypos
          ]
        }
      })
      line = line.replace(
        /at [+-]?([0-9]*[.])?[0-9]+ [+-]?([0-9]*[.])?[0-9]+/,
        `at ${pos[0]} ${pos[1]}`
      )
      footprint_split[i] = line
    }
  })
  footprint_text = footprint_split.join('\n')

  return footprint_text
}

choc(10,10)

module.exports = {
  choc:choc
}
